import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { X } from "lucide-react";

interface DeleteModalProps {
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => boolean | void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  dialogOpen,
  setDialogOpen,
}) => {
  return (
    <div className={`modal ${dialogOpen ? "block" : "hidden"}`}>
      <div className="flex left-[37.5%] items-center absolute bg-slate-500">
        <Card className="flex flex-col justify-center mt-4 w-1/4 h-55 fixed top-[31%]">
          <div className="flex justify-end">
            <Button
              onClick={() => setDialogOpen(false)}
              className="hover:bg-gray-500 "
            >
              <X />
            </Button>
          </div>
          <CardHeader>
            <CardTitle className="mb-5 flex justify-center">
              Are you sure you want to delete this task?
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button className="hover:bg-gray-500">Delete</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default DeleteModal;
