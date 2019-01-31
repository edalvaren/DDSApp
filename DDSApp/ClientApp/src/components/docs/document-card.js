import React from 'react'

import { CardContent, Typography } from '@material-ui/core'

import DocCardContainer from '../doc-card-container'

export default ({ title, category, topic, lastUpdate, url, onClick }) => {
    return (
        <DocCardContainer onClick={onClick}>
            <CardContent>
                <Typography style={{ marginBottom: 16, fontSize: 14 }} color='textSecondary'>
                    {category}
                </Typography>
                <Typography style={{ height: 120 }} variant="headline" component="h2">
                    {title}
                </Typography>
            </CardContent>
        </DocCardContainer>
    )
}