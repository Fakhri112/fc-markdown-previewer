import { marked } from "marked";
import { ChangeEvent, useState } from "react";

type TextType = string | Promise<string>;

function App() {
	const [text, SetText] = useState(
		"# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n if (firstLine == '`' && lastLine == '`') {\n  return multiLineCode;\n }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n - Some are bulleted.\n   - With different indentation levels.\n    - That look like this.\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)",
	);
	const [showPreview, SetShowPreview] = useState(false);
	const handleParse = (e: ChangeEvent) => {
		let el = e.target as HTMLTextAreaElement;
		SetText(el.value);
	};

	return (
		<div className="bg-[#FA7070] h-screen grid place-items-center">
			<div className="w-full h-full p-8 overflow-hidden flex-col flex">
				<p className="w-full font-mono rounded-md text-center bg-[#A1C398] text-md p-1 font-bold">
					Markdown Previewer
				</p>
				<div className="flex  overflow-hidden my-4 gap-x-6 h-full w-full ">
					<div
						className={`${
							showPreview ? "md:block hidden" : " "
						}  w-full overflow-hidden`}>
						<div className="border rounded  overflow-hidden w-full h-full flex flex-col">
							<div className="justify-between flex gap-x-2 w-full bg-[#A1C398] text-md p-1 font-semibold text-slate-900">
								<button className="md:pointer-events-none pointer-events-auto  text-slate-900">
									Editor
								</button>
								<button
									onClick={() => SetShowPreview(true)}
									className="md:pointer-events-none pointer-events-auto md:hidden text-white font-normal">
									Preview
								</button>
							</div>
							<textarea
								id="editor"
								onChange={handleParse}
								value={text}
								className="overflow-auto h-full font-mono text-sm bg-[#C6EBC5] outline-none resize-none p-2 w-full h-full"></textarea>
						</div>
					</div>
					<div
						className={`${
							!showPreview ? "md:block hidden" : " "
						}  w-full overflow-hidden`}>
						<div className="border rounded flex flex-col w-full h-full">
							<div className="justify-between flex gap-x-2 w-full bg-[#A1C398] text-md  p-1 font-semibold ">
								<p className="md:pointer-events-none text-slate-900 ">
									Preview
								</p>
								<button
									onClick={() => SetShowPreview(false)}
									className="md:pointer-events-none text-white font-normal md:hidden">
									Editor
								</button>
							</div>
							<div className="!w-full bg-[#FEFDED] p-2 h-full overflow-y-auto">
								<div
									id="preview"
									dangerouslySetInnerHTML={{
										__html: marked.parse(text, { breaks: true }),
									}}
									className="prose lg:prose-md"></div>
							</div>
						</div>
					</div>
				</div>
				<p className="w-full rounded-md font-mono text-center bg-[#A1C398] text-sm p-1 font-semibold text-slate-900">
					Designed By Fakhrie
				</p>
			</div>
		</div>
	);
}

export default App;
