import React from "react";
import { TableRow, TableRowProps } from "@mui/material";
import { motion } from "framer-motion";

const MotionTableRow = motion.create(
  React.forwardRef<HTMLTableRowElement, TableRowProps>((props, ref) => (
    <TableRow ref={ref} {...props} />
  ))
);

export default MotionTableRow;
