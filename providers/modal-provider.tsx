"use client";

import { RenameModal } from "@/components/modals/rename-modals";
import { useEffect, useState } from "react";



// thi is just like redux 
export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  return (
    <div>
      <RenameModal />
    </div>
    

  );
};