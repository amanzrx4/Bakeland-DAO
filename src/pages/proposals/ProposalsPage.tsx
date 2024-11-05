import { ProposalsList } from "@/components/proposals/ProposalsList";
import { Button } from "@/components/ui/button";
import { WalletConnectButton } from "@/components/WalletConnetButton";
import { useNavigate } from "react-router-dom";

export default function ProposalsPage() {
  const navigate = useNavigate();

  return (
    <div>
      <WalletConnectButton />
      <div className="container mx-auto py-8">
        <div className="flex md:flex-row flex-col items-center justify-between gap-4 mb-8">
          <h1 className="text-4xl font-bold">Proposals</h1>
          <Button size="lg" onClick={() => navigate("/proposals/create")}>
            Create Proposal
          </Button>
        </div>
        <ProposalsList />
      </div>
    </div>
  );
}
