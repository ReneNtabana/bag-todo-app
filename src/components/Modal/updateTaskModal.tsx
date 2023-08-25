import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { X } from "lucide-react";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen }) => {
  return (
    <div className={`modal ${modalOpen ? "block" : "hidden"}`}>
      <div className="flex justify-center items-center absolute bg-slate-500">
        <Card className="flex flex-col justify-center mt-20 w-1/4 h-55 fixed">
          <div className="flex justify-end">
            <Button
              onClick={() => setModalOpen(false)}
              className="hover:bg-gray-500 "
            >
              <X />
            </Button>
          </div>
          <CardHeader>
            <CardTitle className="mb-5 flex justify-center">
              Update task
            </CardTitle>
            <div className="flex justify-center items-center">
              <input
                className="text-10ml w-64 pl-12 border border-black-500 rounded-md"
                type="text"
                placeholder="Update task"
              />
            </div>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button className="hover:bg-gray-500">Update</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Modal;
