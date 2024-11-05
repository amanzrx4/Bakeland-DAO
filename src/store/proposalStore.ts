import { create } from "zustand";
import { persist } from "zustand/middleware";

export type VoteValue = "for" | "against" | "abstain";

export interface Proposal {
  id: string;
  title: string;
  description: string;
  status: "pending" | "approved" | "rejected";
  date: Date;
  votes: Array<{
    id: string;
    value: VoteValue;
  }>;
}

interface ProposalStore {
  proposals: Proposal[];
  addProposal: (proposal: Proposal) => void;
  removeProposal: (id: string) => void;
  updateProposal: (id: string, updatedProposal: Partial<Proposal>) => void;
}

export const useProposalStore = create<ProposalStore>()(
  persist(
    (set) => ({
      proposals: [],

      addProposal: (proposal) =>
        set((state) => ({
          proposals: [...state.proposals, proposal],
        })),

      removeProposal: (id) =>
        set((state) => ({
          proposals: state.proposals.filter((p) => p.id !== id),
        })),

      updateProposal: (id, updatedProposal) =>
        set((state) => ({
          proposals: state.proposals.map((p) =>
            p.id === id ? { ...p, ...updatedProposal } : p
          ),
        })),
    }),
    {
      name: "proposals-storage",
    }
  )
);

export const useProposal = (id: string) => {
  return useProposalStore((state) => state.proposals.find((p) => p.id === id));
};
