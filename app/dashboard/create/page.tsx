import { handleSubmit } from "@/actions/actions";
import { SubmitButton } from "@/components/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";

function CreateBlogPage() {
  return (
    <div>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Craete Post</CardTitle>
          <CardDescription>Create a new post to share.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={handleSubmit}>
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input
                name="title"
                required
                placeholder="Aura Farming Title"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea
                name="content"
                required
                placeholder="Your yapping contents"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image URL</Label>
              <Input
                name="url"
                required
                type="url"
                placeholder="https://imagesource..."
              />
            </div>
            <SubmitButton></SubmitButton>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default CreateBlogPage;
