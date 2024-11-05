import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import toast from "react-hot-toast";
import { useProposal, useProposalStore } from "@/store/proposalStore";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  vote: z.enum(["for", "against", "abstain"], {
    required_error: "You need to select a voting option",
  }),
});

interface VotingFormProps {
  proposalId: string;
}

export function VotingForm({ proposalId }: VotingFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { updateProposal } = useProposalStore();
  const navigate = useNavigate();

  const proposal = useProposal(proposalId)!;

  function onSubmit(values: z.infer<typeof formSchema>) {
    updateProposal(proposalId, {
      votes: [...proposal.votes, { id: uuidv4(), value: values.vote }],
    });

    toast.success("Vote submitted");
    navigate("/");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="vote"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Vote</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="for" />
                    </FormControl>
                    <FormLabel className="font-normal">For</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="against" />
                    </FormControl>
                    <FormLabel className="font-normal">Against</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="abstain" />
                    </FormControl>
                    <FormLabel className="font-normal">Abstain</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit Vote</Button>
      </form>
    </Form>
  );
}
