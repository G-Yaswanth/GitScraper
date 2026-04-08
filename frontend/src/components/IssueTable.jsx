// React Grid Logic
import React from "react";
import { useState } from 'react'
import {Table,TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,} from "@/components/ui/table"

const IssueTable = (props) => {

  return (
   <>
   <div  className="rounded-lg border overflow-hidden mt-4">
    <Table>
      <TableCaption>Github Issues</TableCaption>
      <TableHeader className="bg-muted">
        <TableRow>
          <TableHead>Interested</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Labels</TableHead>
          <TableHead>Languages</TableHead>
          <TableHead>URL</TableHead>
          <TableHead>Created At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.issues.map((issue) => (
          <TableRow key={issue._id} className="even:bg-muted/50 hover:bg-muted">
            <TableCell>Yes</TableCell>
            <TableCell className="font-medium">{issue.title}</TableCell>
            <TableCell>{issue.labels.map((label) =>(
              <span key={label} className="bg-blue-50 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                  {label}
              </span> 
              ))}</TableCell>
            {/* <TableCell>{issue.Languages}</TableCell> */}
            <TableCell>{issue.language.join(", ")}</TableCell>
            <TableCell>
              <a className="text-blue-600 text-xs hover:underline" href={issue.url} target="_blank">
                View Issue
              </a>
            </TableCell>
            <TableCell>{new Date(issue.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
   </>
  );
};

export default IssueTable;
