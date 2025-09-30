import { Button } from "@/components/ui/button";
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
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input required placeholder="Aura Farming Title" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea required placeholder="Your yapping contents" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image URL</Label>
              <Input required type="url" placeholder="https://imagesource..." />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default CreateBlogPage;
