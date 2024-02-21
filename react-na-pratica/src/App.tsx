import { Plus, Search, Filter, FileDown, MoreHorizontal } from "lucide-react";
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
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Pagination } from "./components/pagination";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useDebounceValue from "./hooks/debounce-value";
export interface TagResponse {
  first: number;
  prev: any;
  next: number;
  last: number;
  pages: number;
  items: number;
  data: Tag[];
}

export interface Tag {
  title: string;
  amountOfVideos: number;
  id: string;
}

export function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState("");

  // const debounceFilter = useDebounceValue(filter, 1000);

  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const urlFilter = searchParams.get("filter") ?? "";

  // useEffect(() => {
  //   setSearchParams((params) => {
  //     params.set("page", "1");
  //     return params;
  //   });
  // }, [debounceFilter, setSearchParams]);
  // // para filtrar os dados a partir da página 1, independente da pagina atual

  const { data: tagsResponse, isLoading } = useQuery<TagResponse>({
    queryKey: ["get-tags", urlFilter, page], // id unico
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3333/tags?_page=${page}&_per_page=50&title=${urlFilter}`
      ); // onde tá rodando a API
      const data = await response.json();
      console.log(data);

      // dealy 2s
      // await new Promise((resolve) => setTimeout(resolve, 2000));

      return data;
    },
    placeholderData: keepPreviousData,
  });

  function handleFilter() {
    setSearchParams((params) => {
      params.set("page", "1");
      params.set("filter", filter);

      return params;
    });
  }

  if (isLoading) {
    return null;
  }

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
          <div className="flex items-center">
            <Input variant="filter">
              <Search className="size-3" />
              <Control
                placeholder="Pesquise tags"
                onChange={(e) => setFilter(e.target.value)}
                value={filter}
              />
            </Input>
            <Button>
              {" "}
              <Filter className="size-3" onClick={handleFilter} /> Filter
            </Button>
          </div>

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
            {tagsResponse?.data.map((tag) => {
              return (
                <TableRow key={tag.id}>
                  <TableCell></TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1.5">
                      <span className="font-medium hover:text-zinc-300">
                        {tag.title}
                      </span>
                      <span className="text-xs text-zinc-500 hover:text-zinc-50">
                        {tag.id}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-zinc-300">
                    {tag.amountOfVideos} video(s)
                  </TableCell>
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

        {tagsResponse && (
          <Pagination
            pages={tagsResponse.pages}
            items={tagsResponse.items}
            page={page}
          />
        )}
      </main>
    </div>
  );
}
