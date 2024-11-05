import { Proposal } from "./Proposal";
import { useProposalStore } from "@/store/proposalStore";

export function ProposalsList() {
  const proposals = useProposalStore((state) => state.proposals);

  return (
    <div className="space-y-4 flex flex-col">
      {proposals.length === 0 && <div>No proposals found. Add one!</div>}

      {proposals.map((proposal) => (
        <Proposal key={proposal.id} {...proposal} />
      ))}
    </div>
  );
}
