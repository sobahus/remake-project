import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "./../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { useState } from "react";
import { Plus, Save } from "lucide-react";

const Modal = () => {
  const [open, setOpen] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  return (
    <section>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary" className="w-full sm:w-auto text-xs md:text-sm lg:text-md">
            <Plus className="w-4 h-4"/>
            Add Client
          </Button>
        </DialogTrigger>
        <DialogContent
          className={`
      w-[95vw] max-w-full  
      transition-all duration-300 ease-in-out 
      ${
        showPayment
          ? "sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl" // payment shown
          : "sm:max-w-xl md:max-w-3xl" // payment hidden
      }
    `}
          aria-describedby={undefined}
        >
          <DialogHeader>
            <DialogTitle className="border-b p-4 py-4">
              Add New Client
            </DialogTitle>
          </DialogHeader>

          <div
            className={`
      grid 
      ${
        showPayment
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" // payment shown
          : "grid-cols-1 md:grid-cols-2" // payment hidden
      } 
      gap-6 px-4 sm:px-6 overflow-auto max-h-[90vh]`}
          >
            {/* Username & Password Column */}
            <div className="space-y-4 min-w-[250px]">
              <div className="space-y-1">
                <Label>Username *</Label>
                <Input placeholder="user@altafocus" />
              </div>
              <div className="space-y-1">
                <Label>Password *</Label>
                <Input type="password" placeholder="password123" />
              </div>
              <div className="space-y-1">
                <Label>Profile *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select profile" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="asd">asd</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label>Static IP Address</Label>
                <Input placeholder="0.0.0.0" />
                <p className="text-xs text-blue-600 mt-1">
                  Jika ingin melakukan static IP pada pelanggan, Anda bisa isi
                  form ini
                </p>
              </div>
              <div className="space-y-1">
                <Label>SN</Label>
                <Input placeholder="XXXXXXXXXX" />
              </div>
            </div>

            {/* Personal Information Column */}
            <div className="space-y-4 min-w-[250px]">
              <div className="space-y-1">
                <Label>Full Name *</Label>
                <Input placeholder="Admin" />
              </div>
              <div className="space-y-1">
                <Label>Phone Number</Label>
                <Input placeholder="(62) __" />
              </div>
              <div className="space-y-1">
                <Label>Email</Label>
                <Input placeholder="someone@gmail.com" />
              </div>
              <div className="space-y-1">
                <Label>Address</Label>
                <Textarea placeholder="Jl. Soekarno Hatta No. 45" />
              </div>
              <div className="space-y-1">
                <Label>Tags</Label>
                <Input placeholder="Tags" />
              </div>
              <div className="flex items-center gap-1">
                <Checkbox
                  id="billing"
                  checked={showPayment}
                  onCheckedChange={(val) => setShowPayment(!!val)}
                />
                <Label htmlFor="billing">Add on billing</Label>
              </div>
            </div>

            {/* Payment Column - Conditionally Rendered */}
            {showPayment && (
              <div className="space-y-4 min-w-[250px]">
                <div className="space-y-1">
                  <Label>Payment Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pascabayar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="pascabayar">Pascabayar</SelectItem>
                        <SelectItem value="prabayar">Prabayar</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label>Discount</Label>
                  <Input placeholder="20000" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="tax" />
                    <Label htmlFor="tax">Add Tax</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="notif" />
                    <Label htmlFor="notif">Send Invoice Notification</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="attach" disabled />
                    <Label
                      htmlFor="attach"
                      className="text-gray-600 line-through"
                    >
                      Attach Invoice File
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="whatsapp" />
                    <Label htmlFor="whatsapp">
                      Send Expired Reminder (Whatsapp H-1)
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="email-notif" />
                    <Label htmlFor="email-notif">
                      Send Invoice Notification (Email)
                    </Label>
                  </div>
                </div>
              </div>
            )}
          </div>

          <DialogFooter className="px-4 sm:px-6">
            <Button
              variant="default"
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 w-full sm:w-auto"
            >
              <Save className="w-4 h-4 mr-2" />
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Modal;
