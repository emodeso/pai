// Copyright (c) Microsoft Corporation
// All rights reserved.
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
// to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
// BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import React, {useContext} from 'react';

import {DefaultButton} from 'office-ui-fabric-react/lib/Button';
import {Link} from 'office-ui-fabric-react/lib/Link';
// import {ColumnActionsMode, Selection} from 'office-ui-fabric-react/lib/DetailsList';
import {MessageBar, MessageBarType} from 'office-ui-fabric-react/lib/MessageBar';
import {ShimmeredDetailsList} from 'office-ui-fabric-react/lib/ShimmeredDetailsList';
import {DetailsList, SelectionMode} from 'office-ui-fabric-react/lib/DetailsList';
import {FontClassNames} from 'office-ui-fabric-react/lib/Styling';

import Context from './context';
import {toBool} from './utils';

const zeroPaddingRowFieldStyle = {
  marginTop: -11,
  marginBottom: -11,
  marginLeft: -12,
  marginRight: -8,
};

export default function Table() {
  const {userInfos} = useContext(Context);

  const usernameColumn = {
    key: 'username',
    minWidth: 100,
    name: 'User Name',
    fieldName: 'username',
    className: FontClassNames.mediumPlus,
    headerClassName: FontClassNames.medium,
    isResizable: true,
  };

  const passwordColumn = {
    key: 'password',
    minWidth: 80,
    name: 'Password',
    fieldName: 'password',
    className: FontClassNames.mediumPlus,
    headerClassName: FontClassNames.medium,
    isResizable: true,
  };

  const adminColumn = {
    key: 'admin',
    minWidth: 60,
    name: 'Admin',
    fieldName: 'admin',
    className: FontClassNames.mediumPlus,
    headerClassName: FontClassNames.medium,
    isResizable: true,
    onRender: ({admin}) => {
      return toBool(admin) ? 'Yes' : 'No';
    },
  };

  const virtualClusterColumn = {
    key: 'virtual cluster',
    minWidth: 100,
    name: 'Virtual Cluster',
    fieldName: 'virtual cluster',
    className: FontClassNames.mediumPlus,
    headerClassName: FontClassNames.medium,
    isResizable: true,
  };

  const githubPATColumn = {
    key: 'githubPAT',
    minWidth: 80,
    name: 'Github PAT',
    fieldName: 'githubPAT',
    className: FontClassNames.mediumPlus,
    headerClassName: FontClassNames.medium,
    isResizable: true,
  };

  const statusColumn = {
    key: 'status',
    minWidth: 80,
    name: 'Status',
    fieldName: 'status',
    className: FontClassNames.mediumPlus,
    headerClassName: FontClassNames.medium,
    isResizable: true,
    onRender: ({status: {isSuccess} = {}}) => {
      if (isSuccess === true) return 'Success';
      if (isSuccess === false) return 'Failed';
      return undefined;
    },
  };

  const actionColumn = {
    key: 'action',
    minWidth: 60,
    name: 'Action',
    className: FontClassNames.mediumPlus,
    headerClassName: FontClassNames.medium,
    isResizable: true,
  };
  //   const modifiedColumn = applySortProps({
  //     key: 'modified',
  //     minWidth: 150,
  //     name: 'Date Modified',
  //     className: FontClassNames.mediumPlus,
  //     headerClassName: FontClassNames.medium,
  //     isResizable: true,
  //     isSorted: ordering.field === 'modified',
  //     isSortedDescending: !ordering.descending,
  //     onRender(job) {
  //       return DateTime.fromJSDate(getModified(job)).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
  //     },
  //   });
  //   const userColumn = applySortProps({
  //     key: 'user',
  //     minWidth: 100,
  //     name: 'User',
  //     fieldName: 'username',
  //     className: FontClassNames.mediumPlus,
  //     headerClassName: FontClassNames.medium,
  //     isResizable: true,
  //     isFiltered: filter.users.size > 0,
  //   });
  //   const durationColumn = applySortProps({
  //     key: 'duration',
  //     minWidth: 60,
  //     name: 'Duration',
  //     className: FontClassNames.mediumPlus,
  //     headerClassName: FontClassNames.medium,
  //     isResizable: true,
  //     onRender(job) {
  //       return Duration.fromMillis(getDuration(job)).toFormat(`h:mm:ss`);
  //     },
  //   });
  //   const virtualClusterColumn = applySortProps({
  //     key: 'virtualCluster',
  //     minWidth: 100,
  //     name: 'Virtual Cluster',
  //     fieldName: 'virtualCluster',
  //     className: FontClassNames.mediumPlus,
  //     headerClassName: FontClassNames.medium,
  //     isResizable: true,
  //     isFiltered: filter.virtualClusters.size > 0,
  //   });
  //   const retriesColumn = applySortProps({
  //     key: 'retries',
  //     minWidth: 60,
  //     name: 'Retries',
  //     fieldName: 'retries',
  //     className: FontClassNames.mediumPlus,
  //     headerClassName: FontClassNames.medium,
  //     isResizable: true,
  //   });
  //   const taskCountColumn = applySortProps({
  //     key: 'taskCount',
  //     minWidth: 60,
  //     name: 'Tasks',
  //     fieldName: 'totalTaskNumber',
  //     className: FontClassNames.mediumPlus,
  //     headerClassName: FontClassNames.medium,
  //     isResizable: true,
  //   });
  //   const gpuCountColumn = applySortProps({
  //     key: 'gpuCount',
  //     minWidth: 60,
  //     name: 'GPUs',
  //     fieldName: 'totalGpuNumber',
  //     className: FontClassNames.mediumPlus,
  //     headerClassName: FontClassNames.medium,
  //     isResizable: true,
  //   });
  //   const statusColumn = applySortProps({
  //     key: 'status',
  //     minWidth: 100,
  //     name: 'Status',
  //     headerClassName: FontClassNames.medium,
  //     isResizable: true,
  //     isFiltered: filter.statuses.size > 0,
  //     onRender(job) {
  //       /** @type {React.CSSProperties} */
  //       const wrapperStyle = {display: 'inline-block', verticalAlign: 'middle', width: '100%'};
  //       const statusText = getStatusText(job);
  //       /** @type {MessageBarType} */
  //       const messageBarType = {
  //         Waiting: MessageBarType.warning,
  //         Running: MessageBarType.success,
  //         Stopping: MessageBarType.severeWarning,
  //         Succeeded: MessageBarType.success,
  //         Failed: MessageBarType.remove,
  //         Stopped: MessageBarType.blocked,
  //       }[statusText];
  //       const rootStyle = {
  //         backgroundColor: {
  //           Waiting: '#FCD116',
  //           Running: '#0071BC',
  //           Stopping: '#0071BC',
  //           Succeeded: '#7FBA00',
  //           Failed: '#E81123',
  //           Stopped: '#B1B5B8',
  //         }[statusText],
  //       };
  //       /** @type {import('@uifabric/styling').IStyle} */
  //       const iconContainerStyle = {marginTop: 8, marginBottom: 8, marginLeft: 8};
  //       /** @type {import('@uifabric/styling').IStyle} */
  //       const iconStyle = {color: 'white'};
  //       /** @type {import('@uifabric/styling').IStyle} */
  //       const textStyle = {marginTop: 8, marginRight: 8, marginBottom: 8, color: 'white'};
  //       return (
  //         <div style={Object.assign(wrapperStyle, zeroPaddingRowFieldStyle)}>
  //           <MessageBar
  //             messageBarType={messageBarType}
  //             styles={{root: rootStyle, iconContainer: iconContainerStyle, icon: iconStyle, text: textStyle}}
  //           >
  //             {statusText}
  //           </MessageBar>
  //         </div>
  //       );
  //     },
  //   });

  //   /**
  //    * @type {import('office-ui-fabric-react').IColumn}
  //    */
  //   const actionsColumn = {
  //     key: 'actions',
  //     minWidth: 100,
  //     name: 'Actions',
  //     headerClassName: FontClassNames.medium,
  //     columnActionsMode: ColumnActionsMode.disabled,
  //     onRender(job) {
  //       /**
  //        * @param {React.MouseEvent} event
  //        */
  //       function onClick(event) {
  //         event.stopPropagation();
  //         stopJob(job);
  //       }
  //       /** @type {React.CSSProperties} */
  //       const wrapperStyle = {display: 'inline-block', verticalAlign: 'middle', width: '100%'};

  //       const statusText = getStatusText(job);
  //       const disabled = statusText !== 'Waiting' && statusText !== 'Running';
  //       return (
  //         <div style={Object.assign(wrapperStyle, zeroPaddingRowFieldStyle)} data-selection-disabled>
  //           <DefaultButton
  //             iconProps={{iconName: 'StopSolid'}}
  //             disabled={disabled}
  //             onClick={onClick}
  //           >
  //             Stop
  //           </DefaultButton>
  //         </div>
  //       );
  //     },
  //   };

  const columns = [
    usernameColumn,
    statusColumn,
    passwordColumn,
    adminColumn,
    virtualClusterColumn,
    githubPATColumn,
    actionColumn,
    // modifiedColumn,
    // userColumn,
    // durationColumn,
    // virtualClusterColumn,
    // retriesColumn,
    // taskCountColumn,
    // gpuCountColumn,
    // statusColumn,
    // actionsColumn,
  ];

  return (
    <DetailsList
      items={userInfos}
      selectionMode={SelectionMode.none}
      columns={columns}
    />
  );
}
