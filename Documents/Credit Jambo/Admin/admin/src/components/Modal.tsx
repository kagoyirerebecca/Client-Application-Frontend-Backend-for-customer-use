interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-brandGreen text-white rounded hover:bg-green-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};
