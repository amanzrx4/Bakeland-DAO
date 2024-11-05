import { Badge } from "@/components/ui/badge";

type StatusType = "active" | "passed" | "rejected" | "pending" | (string & {});

interface ProposalStatusProps {
  status: StatusType;
}

export function ProposalStatus({ status }: ProposalStatusProps) {
  const statusStyles: Record<
    StatusType,
    { variant: "default" | "destructive" | "secondary" | "outline" }
  > = {
    active: { variant: "default" },
    passed: { variant: "default" },
    rejected: { variant: "destructive" },
    pending: { variant: "secondary" },
  };

  return (
    <Badge variant={statusStyles[status]?.variant || "default"}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
}
