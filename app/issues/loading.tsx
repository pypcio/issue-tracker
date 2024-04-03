import { Skeleton, Table } from "@radix-ui/themes";
import React from "react";
import IssueActions from "./IssueActions";
// import Skeleton from "react-loading-skeleton";

const LoadingIssuePage = () => {
  const issues = [1, 2, 3, 4, 5];
  return (
    <div>
      <IssueActions />
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue}>
              <Table.Cell>
                <Skeleton>Lorem ipsum dolor, sit ame asdas</Skeleton>
                <div className='block md:hidden'>
                  <Skeleton>Loading</Skeleton>
                </div>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>
                <Skeleton>Lorem ipsum dolor, sit ame asdas</Skeleton>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>
                <Skeleton>Lorem ipsum dolor, sit ame asdas</Skeleton>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default LoadingIssuePage;
