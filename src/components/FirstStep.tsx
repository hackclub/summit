import Link from "next/link";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FirstStep = () => {
  const onDrop = useCallback((files: File[]) => {
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div id="dream" className="bg-primary relative py-10">
      <h2 className="text-center text-secondary text-5xl">Your First Step Begins... now</h2>
      <p className="text-center text-secondary text-2xl mb-8">
        Dreams are projects ideas in your heart waiting to come to life
      </p>
      <div className="bg-secondary mx-14 p-6">
        <div className="flex items-stretch justify-center gap-6">
          <div className="w-1/2">
            <h2 className="text-primary text-5xl mb-2">Share Your Dream</h2>

            <p className="text-primary text-xl">Dream Code Name (flexible)</p>
            <input
              placeholder="orpheusMaps"
              className="border-[2.5px] bg-secondary border-primary px-2 py-1.5 w-full placeholder:text-primary/30 text-xl mb-2 text-primary outline-none"
            />

            <p className="text-primary text-xl">Collaborators (github usernames)</p>
            <input
              placeholder="orpheus, zrl, zsh"
              className="border-[2.5px] bg-secondary border-primary px-2 py-1.5 w-full placeholder:text-primary/30 text-xl mb-2 text-primary outline-none"
            />

            <p className="text-primary text-xl">Your Dream Project Idea</p>
            <textarea
              className="border-[2.5px] bg-secondary border-primary px-2 py-1.5 w-full placeholder:text-primary/30 text-xl mb-2 text-primary outline-none"
              placeholder="Imagine a map with every club, hackathon, and community event full of content from club meets, hackathons, and project ships."
            />
          </div>

          <div
            {...getRootProps()}
            className="p-10 w-1/2 h-[320px] flex items-center justify-center border-dashed border-[2.5px] border-primary cursor-pointer"
          >
            {isDragActive ? (
              <p className="text-primary text-2xl text-center">Drop it like it's hot</p>
            ) : (
              <p className="text-primary text-2xl text-center">
                Upload a sketch of <br /> your dream
              </p>
            )}
            <input {...getInputProps()} />
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 mb-6">
          <button
            className="border-[2.5px] border-secondary text-2xl py-4 text-secondary bg-primary w-1/2"
            style={{
              boxShadow: "rgba(180, 46, 30, 1) 0px 0px 0px 2.5px",
            }}
          >
            Download yourDream.md
          </button>
          <button className="border-[2.5px] border-primary text-2xl py-4 text-primary w-1/2">
            leaders-summit repo
          </button>
        </div>
        <p className="text-primary text-2xl">
          To register, share your dream in a PR. Here's a{" "}
          <Link href="/" className="underline">
            video on how to make your dream PR
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FirstStep;
