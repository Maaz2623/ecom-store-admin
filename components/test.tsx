"use client";
import React from "react";
import { Button } from "./ui/button";
import {} from "./modals/store-modal";
import { useStoreModal } from "@/hooks/use-store-modal";

const TestButton = () => {
  const storeModal = useStoreModal();

  return (
    <Button
      onClick={() => {
        storeModal.onOpen();
        console.log("clicked")
      }}
    >
      Modal
    </Button>
  );
};

export default TestButton;
