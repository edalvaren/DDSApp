import _ from 'lodash'
import React from 'react'

import Page from '../page-wrapper'
import { connectTo } from '../../utils/generic';
import DocumentsContainer from '../docs-container';
import DocuCard from './document-card'
import { toDoc, toDocuments } from '../../actions/navigation';
import { timestampForHuman } from '../../utils/time';

export default connectTo(
    state => state.documents,
    { toDoc },
    ({ documents, toDoc }) => (
        <Page>
            <DocumentsContainer>
                {_.sortBy(documents, ['publishTime']).reverse().map((story, number) => {
                    const date = timestampForHuman(story.publishTime)
                    const dateText = `Published on ${date}`

                    return (
                        <DocuCard
                            title={story.title}
                            key={number}
                            dateText={dateText}
                            onClick={() => toDocuments(document.id)}
                        />
                    )
                })}
            </DocumentsContainer>
        </Page>
    )
)