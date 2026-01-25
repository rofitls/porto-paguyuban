"use client";

import { useEffect, useRef, useState } from "react";
import { familyTree } from "../../data/familyTree";
import FamilyNode from "./family-node";
import Image from "next/image";
import "./family-tree.css";

export default function FamilyTree() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.scrollLeft =
      (wrapper.scrollWidth - wrapper.clientWidth) / 2;
  }, []);

  return (
    <>
      <section ref={wrapperRef} className="family-tree-wrapper">
        <div className="family-tree">
          {/* ROOT */}
          <div className="root-node">
            <div
              className="card root cursor-pointer"
              onClick={() =>
                setSelected({
                  name: familyTree.suami,
                  pasangan: familyTree.istri,
                  photo: familyTree.photo,
                })
              }
            >
              <strong>{familyTree.suami}</strong>
              <div className="text-sm">{familyTree.istri}</div>
            </div>
          </div>

          {/* ANAK */}
          <div className="children-row">
            {familyTree.children.map((child) => (
              <FamilyNode
                key={child.id}
                data={child}
                onClick={setSelected}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-xl p-4 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selected.photo ? (
              <Image
                src={selected.photo}
                alt={selected.name}
                width={400}
                height={400}
                className="w-full h-auto rounded-lg object-cover"
              />
            ) : (
              <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg text-gray-400">
                Foto belum tersedia
              </div>
            )}

            <div className="mt-3 text-center">
              <strong className="block">{selected.name}</strong>
              <span className="text-sm text-gray-600">
                {selected.pasangan}
              </span>
            </div>

            <button
              className="mt-4 w-full rounded-lg bg-gray-800 text-white py-2"
              onClick={() => setSelected(null)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </>
  );
}