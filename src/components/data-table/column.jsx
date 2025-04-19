import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "no",
    header: "No",
  },
  {
    accessorKey: "fullname",
    header: "Fullname",
    cell: ({ row }) => row.getValue("fullname"),
  },
  {
    accessorKey: "ip",
    header: "IP",
  },
  {
    accessorKey: "profile",
    header: "Profile",
  },
  {
    accessorKey: "expired",
    header: "Expired",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const value = getValue();
      return (
        <span
          className={`w-full px-2 py-1 rounded text-xs md:text-sm lg:text-sm font-semibold ${
            value === "active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {value}
        </span>
      );
    },
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: () => (
      <Button
        variant="secondary"
        size="sm"
        className="text-xs md:text-sm lg:text-md bg-gray-200 hover:bg-gray-300 transition-colors w-full"
      >
        Edit
      </Button>
    ),
  },
];
