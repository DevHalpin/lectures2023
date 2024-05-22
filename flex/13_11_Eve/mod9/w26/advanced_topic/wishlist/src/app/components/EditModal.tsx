import React, {
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from "react";
import WishContext from "../context/wishContext";

const EditModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { wish, setWish, updateList } = useContext(WishContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
    setWish({ ...wish, [e.target.name]: e.target.value });
  };

  const updateWish = async () => {
    setIsEditing(true);
    const res = await fetch("/api/update", {
      method: "POST",
      body: JSON.stringify({
        title: wish.title,
        link: wish.link,
        wishId: wish.id,
      }),
    });
    const data = await res.json();
    if (data.error) {
      return;
    }
    updateList(data.wishlist);
    setIsOpen(false);
    setIsEditing(false);
  };

  return (
    <div
      className={`${
        isOpen ? "scale-100" : "scale-0"
      } bg-white/50 h-full w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-center items-center`}
    >
        <div className="relative">
            <div className="p-2">
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={wish.title}
                    onChange={handleEdit}
                    className="w-full p-2 rounded-lg text-black/90"
                />
            </div>
            <div className="p-2">
                <input
                    type="text"
                    placeholder="Enter Link"
                    name="link"
                    value={wish.link}
                    onChange={handleEdit}
                    className="w-full p-2 rounded-lg text-black/90"
                />
            </div>

            <div className="flex justify-center">
            <button
              disabled={isEditing}
              onClick={updateWish}
              className="bg-red-400 w-fit px-7 py-2 disabled:bg-gray-600 rounded-lg"
            >
              {isEditing ? "Updating..." : "Update"}
            </button>
          </div>
        </div>

        <div
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
    </div>
  );
};

export default EditModal;
