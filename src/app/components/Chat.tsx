"use client";

import { useChat } from "ai/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Spinersvg from "../utils/Spinersvg";
import Button from "./button";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

  const handleChange = (event: any) => {
    if (!isLoading) handleInputChange(event);
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-end">
      <div className="flex flex-col max-w-6xl px-3 py-6 mx-auto">
        <div className="flex flex-col space-y-3">
          {messages.map((message) => {
            const isUser = message.role != "user";
            const roleStyle = isUser
              ? "bg-gray-100 text-black"
              : "bg-gray-600 text-white";
            const containerStyle = isUser
              ? "flex justify-start"
              : "flex justify-end";

            return (
              <div
                key={message.id}
                className={`flex items-start space-x-2 ${containerStyle}`}
              >
                {!isUser && (
                  <img
                    src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <div className={`px-4 py-2 rounded-lg shadow-md ${roleStyle}`}>
                  {message.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex justify-center px-8 py-4">
        <div className="flex items-center sm:w-full max-w-4xl">
          <input
            className="flex-grow px-4 py-2 text-sm sm:text-xl border border-gray-600 rounded-lg focus:outline-none focus:border-gray-400"
            placeholder="Envia un mensaje"
            type="text"
            name="content"
            value={input}
            onChange={handleChange}
          />

          <Button disabled={isLoading}>
            {isLoading ? (
              <Spinersvg />
            ) : (
              <FontAwesomeIcon icon={faPaperPlane} />
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
