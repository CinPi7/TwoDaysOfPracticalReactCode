import { Plus, Search, FileDown, MoreHorizontal } from "lucide-react";
import { Header } from "./components/header";
import { Tabs } from "./components/tabs";
import { Button } from "./components/ui/button";
import { Control, Input } from "./components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";

export function App() {
  return (
    <div className="py-10 space-y-8 mx-8">
      <div className="">
        <Header />
        <Tabs />
      </div>
      <main className="max-w-6xl mx-auto space-y-5">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold">Tags</h1>
          <Button variant="primary">
            <Plus className="size-3" /> Criar nova tag
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <Input variant="filter">
            <Search className="size-3" />
            <Control placeholder="Pesquise tags" />
          </Input>

          <Button>
            {" "}
            <FileDown className="size-3" /> Export
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Tag</TableHead>
              <TableHead>Quantidade de Vídeos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell></TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1.5">
                      <span className="font-medium hover:text-zinc-300">
                        React
                      </span>
                      <span className="text-xs text-zinc-500 hover:text-zinc-50">
                        7HCG1-9JU3GJHD1-19SJHD-1233
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-zinc-300">13 vídeo(s)</TableCell>
                  <TableCell className="text-rigth">
                    <Button size="icon">
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </main>
    </div>
  );
}
