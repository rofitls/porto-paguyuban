type FamilyNodeProps = {
  data: any;
};

export default function FamilyNode({ data }: FamilyNodeProps) {
  return (
    <div className="node-wrapper">
      {/* GARIS DARI ORTU */}
      <div className="vertical-line" />

      {/* CARD */}
      <div className="card">
        <strong>{data.anak}</strong>
        <div className="text-sm">{data.mantu}</div>
      </div>

      {/* CHILDREN */}
      {data.children && (
        <>
          <div className="horizontal-line" />
          <div className="children-row">
            {data.children.map((child: any) => (
              <FamilyNode key={child.id} data={child} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
