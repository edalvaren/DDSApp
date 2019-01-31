import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    selectResult,
    fetchPostsIfNeeded,
    invalidateResults
} from '../actions/search'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class AsyncApp extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
            const { dispatch, selectedSubreddit } = this.props
            dispatch(fetchPostsIfNeeded(selectedSubreddit))
        }
    }

    handleChange(nextSubreddit) {
        this.props.dispatch(selectResult(nextSubreddit))
        this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
    }

    handleRefreshClick(e) {
        e.preventDefault()

        const { dispatch, selectedResult } = this.props
        dispatch(invalidateResults(selectedResult))
        dispatch(fetchPostsIfNeeded(selectedResult))
    }

    render() {
        const { selectedResult, posts, isFetching, lastUpdated } = this.props
        return (
            <div>
                <Picker
                    value={selectedResult}
                    onChange={this.handleChange}
                    options={['reactjs', 'frontend']}
                />
                <p>
                    {lastUpdated && (
                        <span>
                            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
                        </span>
                    )}
                    {!isFetching && (
                        <button onClick={this.handleRefreshClick}>Refresh</button>
                    )}
                </p>
                {isFetching && posts.length === 0 && <h2>Loading...</h2>}
                {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
                {posts.length > 0 && (
                    <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <Posts posts={posts} />
                    </div>
                )}
            </div>
        )
    }
}

AsyncApp.propTypes = {
    selectedResult: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { selectedResult, postsByQuery } = state
    const { isFetching, lastUpdated, items: posts } = postsByQuery[
        selectedResult
    ] || {
            isFetching: true,
            items: []
        }

    return {
        selectResult,
        posts,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(AsyncApp)