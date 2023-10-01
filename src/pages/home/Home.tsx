import { DatePicker } from "@/components/date-picker";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Cars } from "../../metadata/metadata";

import MobiImg from "../../assets/cars/Mobi.jpeg";
import KwidImg from "../../assets/cars/kwid.jpeg";

export default function Home() {
  function getCard(name: string, brand: string) {
    const src = name === "Mobi" ? MobiImg : KwidImg;

    return (
      <div className="rounded-lg p-10 border border-orange-400">
        <img className="rounded-lg" src={src} />
        <br />
        <div>
          <p>Nome: {name}</p>
          <p>Marca: {brand}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-4/5 m-auto mt-16">
        <h3 className="text-2xl font-medium">move.easy</h3>
        <p className="text-sm text-muted-foreground">Faça sua reserva...</p>
      </div>

      <div className="h-32 w-4/5 flex items-center justify-between m-auto rounded-lg mt-10 p-10 border border-orange-400">
        <div>
          <div className="ml-2 mb-2">Local da retirada</div>
          <Select>
            <SelectTrigger className="w-[380px]">
              <SelectValue placeholder="Selecione..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Jaragua do Sul</SelectItem>
                <SelectItem value="banana">Joinvile</SelectItem>
                <SelectItem value="blueberry">Mafra</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="">
          <div className="ml-2 mb-2">Data</div>
          <DatePicker />
        </div>

        <Button className="mt-8" onClick={() => alert("Soon...")}>
          Reservar
        </Button>
      </div>

      <div className="w-4/5 m-auto mt-16">
        <h3 className="text-lg font-medium mb-8">Nossos carros...</h3>

        <div className="grid grid-cols-3 gap-8">{Cars.map(({ Name, Brand }) => getCard(Name, Brand))}</div>
      </div>
    </>
  );
}
