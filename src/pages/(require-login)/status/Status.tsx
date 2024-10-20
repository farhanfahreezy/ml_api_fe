import { getStatus } from "@/api/status/status";
import MainLayout from "@/layout/MainLayout";
import { StatusResponse } from "@/types/status";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusEnum } from "@/enums/status";

const Status = () => {
  const [data, setData] = useState<StatusResponse | null>();

  const { mutateAsync: getStatusMutation } = useMutation({
    mutationFn: getStatus,
  });

  useEffect(() => {
    const fetchData = async () => {
      getStatusMutation()
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log("err", err);
        });
    };
    fetchData();
  }, [getStatusMutation]);

  return (
    <MainLayout>
      <Table>
        <TableBody>
          <TableRow className="hover:bg-transparent">
            <TableCell className="font-semibold">Status</TableCell>
            <TableCell>{(data?.status as StatusEnum) ?? "Loading"}</TableCell>
          </TableRow>
          <TableRow className="hover:bg-transparent">
            <TableCell className="font-semibold">Model Type</TableCell>
            <TableCell>{data?.model_type ?? "-"}</TableCell>
          </TableRow>
          <TableRow className="hover:bg-transparent">
            <TableCell className="font-semibold">Accuracy</TableCell>
            <TableCell>{data?.model_type ?? "-"}</TableCell>
          </TableRow>
          <TableRow className="hover:bg-transparent">
            <TableCell className="font-semibold">Best Parameter</TableCell>
            <TableCell>
              {data?.best_params ? (
                <Table className="bg-card rounded-xl overflow-clip">
                  <TableHeader>
                    <TableRow className="bg-neutral-900 hover:bg-transparent0">
                      <TableHead className="w-[40%]">Parameter</TableHead>
                      <TableHead className="w-[60%]">Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.entries(data.best_params).map(([key, value]) => (
                      <TableRow key={key}>
                        <TableCell className="font-medium">{key}</TableCell>
                        <TableCell>{JSON.stringify(value)}</TableCell>{" "}
                        {/* Use JSON.stringify to render objects/arrays */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div>-</div>
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </MainLayout>
  );
};

export default Status;
