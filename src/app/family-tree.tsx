"use client";

import { useEffect, useRef } from "react";
import { familyTree } from "../../data/familyTree";
import FamilyNode from "./family-node";
import "./family-tree.css";

export default function FamilyTree() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // scroll ke tengah
    const scrollCenter =
      (wrapper.scrollWidth - wrapper.clientWidth) / 2;

    wrapper.scrollLeft = scrollCenter;
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="family-tree-wrapper"
    >
      <div className="family-tree">
        {/* ROOT */}
        <div className="root-node">
          <div className="card root">
            <strong>{familyTree.suami}</strong>
            <div className="text-sm">{familyTree.istri}</div>
          </div>
        </div>

        {/* ANAK-ANAK */}
        <div className="children-row">
          {familyTree.children.map((child) => (
            <FamilyNode key={child.id} data={child} />
          ))}
        </div>
      </div>
    </section>
  );
}
