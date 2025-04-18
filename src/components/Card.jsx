import { Plus, FileText, Save } from "lucide-react";
import { Button } from "./ui/button";
import { DataTable } from "./data-table/DataTable";
import { columns } from "./data-table/column";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

const CardDashboard = () => {
  const [open, setOpen] = useState(false);
  const data = [
    {
      no: 1,
      fullname: "Fauzi",
      ip: "192.168.1.10",
      profile: "default",
      expired: "2025-05-01",
      status: "active",
    },
    {
      no: 2,
      fullname: "Sarah Kurnia",
      ip: "192.168.1.11",
      profile: "student",
      expired: "2025-04-10",
      status: "expired",
    },
    {
      no: 3,
      fullname: "Aldo Pratama",
      ip: "192.168.1.12",
      profile: "guest",
      expired: "2025-06-01",
      status: "active",
    },
    {
      no: 4,
      fullname: "Rina Safitri",
      ip: "192.168.1.13",
      profile: "staff",
      expired: "2025-04-20",
      status: "active",
    },
    {
      no: 5,
      fullname: "Zaki Alfan",
      ip: "192.168.1.14",
      profile: "default",
      expired: "2025-03-15",
      status: "expired",
    },
  ];
  const [showPayment, setShowPayment] = useState(false);

  return (
    <section
      aria-label="card-dashboard"
      className="min-h-[calc(100vh-100px)] h-full p-6"
    >
      <div className="bg-white shadow-sm rounded-lg py-4">
        <div className="flex flex-col p-2 rounded-t-lg" aria-label="list-card">
          <div className="flex">
            <div className="flex-1 items-center px-6">
              <div className="flex justify-between items-center">
                <span className="font-medium">Limit: 0 / 999</span>
                <div className="flex gap-1 text-sm">
                  <Button
                    variant="default"
                    className="bg-blue-500 hover:bg-blue-600"
                  >
                    <FileText />
                    Import
                  </Button>
                  <Button
                    variant="default"
                    className="bg-green-500 hover:bg-green-600"
                  >
                    <FileText />
                    Export
                  </Button>
                </div>
              </div>
            </div>

            <span className="border"></span>

            <div className="flex-1 items-center px-6">
              <div className="flex justify-between items-center">
                <h2 className="font-medium">List PPPoE Client</h2>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button variant="secondary">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Client
                    </Button>
                  </DialogTrigger>
                  <DialogContent  
                    className={`px-4 w-fit transition-all duration-300 ${
                      showPayment ? "min-w-[68rem] " : "min-w-[46rem]"
                    }`}
                    aria-describedby={undefined}
                  >
                    <DialogHeader>
                      <DialogTitle className="border-b-1 p-4 py-4">
                        Add New Client
                      </DialogTitle>
                    </DialogHeader>

                    <div className="flex flex-wrap gap-12 px-6">
                      {/* Username & Password */}
                      <div className="space-y-4">
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
                            Jika ingin melakukan static IP pada pelanggan, Anda
                            bisa isi form ini
                          </p>
                        </div>
                        <div className="space-y-1">
                          <Label>SN</Label>
                          <Input placeholder="XXXXXXXXXX" />
                        </div>
                      </div>

                      {/* Personal Information */}
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <Label>Full Name *</Label>
                          <Input placeholder="Admin"  />
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
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id="billing"
                            checked={showPayment}
                            onCheckedChange={(val) => setShowPayment(!!val)}
                          />
                          <Label htmlFor="billing">Add on billing</Label>
                        </div>
                      </div>

                      {/* Payment */}
                      {showPayment && (
                        <div className="space-y-4">
                          <div className="space-y-1">
                            <Label>Payment Type *</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Pascabayar" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="pascabayar">
                                    Pascabayar
                                  </SelectItem>
                                  <SelectItem value="prabayar">
                                    Prabayar
                                  </SelectItem>
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
                              <Label htmlFor="notif">
                                Send Invoice Notification
                              </Label>
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

                    <DialogFooter className="px-6">
                      <Button
                        variant="default"
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600"
                      >
                        <Save />
                        Save changes
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-4 px-8 py-6">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </section>
  );
};

export default CardDashboard;
