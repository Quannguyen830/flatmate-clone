import { cheerio } from "node_modules/scrapfly-sdk/esm/deps";
import { string } from "zod";

export const getText = (node: cheerio.Element | undefined): string => {
    if (!node?.children?.[0]) return "";
    const textNode = node.children[0];
    if ("data" in textNode) {
      return textNode.data;
    }
    return "";
};