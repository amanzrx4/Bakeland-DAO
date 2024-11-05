import {
  Proposal as ProposalType,
  Proposal as ProposalTypeStore,
  useProposalStore,
} from "@/store/proposalStore";
import { Link } from "react-router-dom";

interface ProposalProps extends ProposalTypeStore {}

export function Proposal({
  id,
  title,
  description,
  date,
  votes,
  status,
}: ProposalProps) {
  const { removeProposal, updateProposal } = useProposalStore();

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as ProposalType["status"];
    updateProposal(id, { status: newStatus });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-start">
        <div>
          <Link to={`/proposals/${id}`} className="hover:underline">
            <h3 className="text-lg font-semibold">{title}</h3>
          </Link>
          <p className="text-gray-600 mt-2">{description}</p>
          <p className="text-sm text-gray-500 mt-2">
            {new Date(date).toLocaleDateString()}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            {votes.length} {votes.length === 1 ? "vote" : "votes"}
          </p>
        </div>
        <div className="flex gap-2">
          <select
            value={status}
            onChange={(e) => {
              e.preventDefault(); // Prevent default link behavior
              e.stopPropagation(); // Stop the event from bubbling up to the Link
              handleStatusChange(e);
            }}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
          <button
            onClick={(e) => {
              e.preventDefault();
              removeProposal(id);
            }}
            className="text-red-500 hover:text-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
