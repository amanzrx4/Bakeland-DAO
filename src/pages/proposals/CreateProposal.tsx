import { CreateProposalForm } from '@/components/proposals/CreateProposalForm'

export default function CreateProposal() {
  return (
    <div className="container mx-auto py-8 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8">Create Proposal</h1>
      <CreateProposalForm />
    </div>
  )
} 