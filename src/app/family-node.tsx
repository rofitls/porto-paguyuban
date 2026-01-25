type FamilyNodeProps = {
  data: any;
  onClick: (data: any) => void;
};

export default function FamilyNode({ data, onClick }: FamilyNodeProps) {
  return (
    <div className="node-wrapper">
      <div className="vertical-line" />

      <div
        className="card cursor-pointer hover:shadow-lg transition"
        onClick={() =>
          onClick({
            name: data.anak,
            pasangan: data.mantu,
            photo: data.photo,
          })
        }
      >
        <strong>{data.anak}</strong>
        <div className="text-sm">{data.mantu}</div>
      </div>

      {data.children && (
        <>
          <div className="horizontal-line" />
          <div className="children-row">
            {data.children.map((child: any) => (
              <FamilyNode
                key={child.id}
                data={child}
                onClick={onClick}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}