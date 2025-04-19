import { FileText, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { DataTable } from "./data-table/DataTable";
import { columns } from "./data-table/column";
import Modal from "./modal/Modal";
import data from "./data/data-dummy";

const CardDashboard = () => {
  return (
    <section
      aria-label="card-dashboard"
      className="min-h-[calc(100vh-100px)] h-full p-6"
    >
      <div className="bg-white shadow-sm rounded-lg py-4">
        <div
          className="flex flex-col p-2 rounded-t-lg md:flex-row md:items-center md:justify-between"
          aria-label="list-card"
        >
          <div className="flex-1 items-center px-4 pb-4 md:pb-0 lg:pb-0">
            <div className="flex justify-between items-center">
              <span className="font-medium text-sm md:text-sm lg:text-base">
                Limit: 0 / 999
              </span>
              <div className="flex gap-1 text-sm">
                <Button
                  variant="default"
                  className="bg-blue-500 hover:bg-blue-600 text-xs md:text-sm lg:text-md"
                >
                  <FileText className="w-4 h-4" />
                  Import
                </Button>
                <Button
                  variant="default"
                  className="bg-green-500 hover:bg-green-600 text-xs md:text-sm lg:text-md"
                >
                  <FileText className="w-4 h-4" />
                  Export
                </Button>
              </div>
            </div>
          </div>

          <span className="border md:hidden"></span>

          <div className="flex-1 items-center px-4 pt-4 md:pt-0 lg:pt-0">
            <div className="flex justify-between items-center">
              <h2 className="font-medium text-sm md:text-sm lg:text-base">
                List PPPoE Client
              </h2>
              <Modal />
            </div>
          </div>
        </div>

        <div className="flex flex-col p-4 px-8 py-6 text-xs">
          {data.length > 0 ? (
            <DataTable columns={columns} data={data} />
          ) : (
            <div className="flex flex-col items-center justify-center py-12 space-y-4 text-gray-500">
              <AlertCircle className="w-12 h-12" />
              <h3 className="text-lg font-medium">No PPPoE Clients Found</h3>
              <p className="text-sm">
                There are currently no clients available.
              </p>
              <div className="flex gap-2 mt-4">
                <Button
                  variant="default"
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Import Clients
                </Button>
                <Modal />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CardDashboard;
