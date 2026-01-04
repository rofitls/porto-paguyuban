"use client";

type Props = {
  open: boolean;
  onClose: () => void;
  data: any;
};

export default function FamilyModal({ open, onClose, data }: Props) {
  if (!open || !data) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        <img
          src={data.photo}
          alt={data.name}
          className="modal-photo"
        />

        <h2>{data.name}</h2>
        {data.pasangan && <p>Pasangan: {data.pasangan}</p>}
      </div>
    </div>
  );
}
