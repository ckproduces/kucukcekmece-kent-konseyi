"use client";

import Image from "next/image";
import {
  TbBlockquote,
  TbBold,
  TbCode,
  TbHeading,
  TbItalic,
  TbLink,
  TbList,
  TbSend,
  TbStrikethrough,
  TbTable,
  TbTrash,
} from "react-icons/tb";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import {
  EditorContent,
  useEditor,
} from "@tiptap/react";
import { BubbleMenu, FloatingMenu } from '@tiptap/react/menus'
import StarterKit from "@tiptap/starter-kit";
import React, { useCallback, useState } from "react";
import { FaShare } from "react-icons/fa6";
import { NodeHtmlMarkdown } from "node-html-markdown";
import Img from "@tiptap/extension-image";
import { BiImageAdd } from "react-icons/bi";
import { useRouter } from "next/navigation";
import {Table} from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import { Markdown } from "tiptap-markdown";
import Gapcursor from "@tiptap/extension-gapcursor";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input"

export default function Page(){
    const [isLoading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const navigator = useRouter();
  //const { data: session }: any = useSession();
  const [title, setTitle] = useState("");


  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      Img,
      StarterKit,
      Highlight,
      Typography,
      Gapcursor,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Markdown,
    ],
    content: "<h3>Yazınızı buradan yazmaya başlayın.</h3>",
    onUpdate: ({ editor }) => {
      let a = NodeHtmlMarkdown.translate(
        editor.getHTML(),
        {},
        undefined,
        undefined
      );
      setContent(a);
      console.log(a);
    },
  });

    return (
            <main className="flex min-h-screen flex-col bg-white dark:bg-zinc-800">
      <div className="w-[80%] mx-auto mt-12">
        <Input
          onValueChange={setTitle}
          value={title}
          placeholder="Bülten gönderisi oluşturun."
          variant="underlined"
          classNames={{
            inputWrapper: "h-[6rem]",
            input: "text-6xl"
          }}
          isRequired
        />
        
        <div className="mt-12 border-1 border-gray-100 rounded-2xl min-h-[30rem]">
          {editor && (
            <BubbleMenu
              className="bubble-menu"
              editor={editor}
            >
              <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive("bold") ? "is-active" : ""}
              >
                <TbBold />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive("italic") ? "is-active" : ""}
              >
                <TbItalic />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive("strike") ? "is-active" : ""}
              >
                <TbStrikethrough />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                className={editor.isActive("bulletList") ? "is-active" : ""}
              >
                <TbCode />
              </button>
            </BubbleMenu>
          )}

          {editor && (
            <FloatingMenu
              className="floating-menu"
              tippyOptions={{ duration: 100 }}
              editor={editor}
            >
              <button
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={
                  editor.isActive("heading", { level: 1 }) ? "is-active" : ""
                }
              >
                <TbHeading />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive("bulletList") ? "is-active" : ""}
              >
                <TbList />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive("blockquote") ? "is-active" : ""}
              >
                <TbBlockquote />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive("codeblock") ? "is-active" : ""}
              >
                <TbCode />
              </button>
            </FloatingMenu>
          )}

          <EditorContent
            placeholder="Gönderinizi yazmaya buradan başlayın."
            className="my-6 h-full w-[95%] mx-auto"
            editor={editor}
          />
        </div>

        <Button className="w-full mt-6" color="primary">Kaydet ve Paylaş <TbSend/></Button>
      </div>
    </main>
    )
}