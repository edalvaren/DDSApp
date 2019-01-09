import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';

export default class NavBreadCrumb extends Component {
    static displayName = NavBreadCrumb.displayName;

    render() {
        return (
            <div>
                <Breadcrumb>
                <BreadcrumbItem active> Home</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb>
                <BreadcrumbItem> <a href="/Home"> Home</a> </BreadcrumbItem>
                <BreadcrumbItem active> Library</BreadcrumbItem>
                </Breadcrumb>
                </div>

        )
    }
}