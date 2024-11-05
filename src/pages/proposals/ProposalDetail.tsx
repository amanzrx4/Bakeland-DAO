import { ProposalStatus } from "@/components/proposals/ProposalStatus";
import { VotingForm } from "@/components/proposals/VotingForm";
import { Card } from "@/components/ui/card";
import { useProposal } from "@/store/proposalStore";
import { useParams } from "react-router-dom";

// interface ProposalDetailProps {
//   id: string;
//   title: string;
//   description: string;
//   date: Date;
//   status: string;
// }

export default function ProposalDetail() {
  const { id } = useParams();

  const proposal = useProposal(id!);

  if (!proposal) {
    return <div>Proposal not found</div>;
  }

  const { id: proposalId, title, description, status, votes } = proposal;

  return (
    <div className="container mx-auto py-8 min-w-96">
      <Card className="p-8">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-3xl font-bold">{title}</h1>
          <ProposalStatus status={status} />
        </div>

        <div className="prose max-w-none mb-8">
          <p>{description}</p>
        </div>

        <div className="prose max-w-none mb-8">
          <p>
            {votes.length} {votes.length === 1 ? "vote" : "votes"}
          </p>
        </div>

        <VotingForm proposalId={proposalId} />
      </Card>
    </div>
  );
}
