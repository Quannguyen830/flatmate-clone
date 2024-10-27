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

export const getImages = (node: cheerio.Element | undefined): string => {
  const attribsNode = node?.attribs ?? string;
  if ("src" in attribsNode) return attribsNode.src;
  return "";
};

export const getFullPrice = (node: cheerio.Element | undefined): string => {
  if (!node?.children?.[0]) return "";
  let fulltext = "";

  for (const textNode of node.children) {
    if (textNode && "data" in textNode) {
      fulltext += textNode.data;
    }
  }

  return fulltext;
};

export const getFeatures = (node: cheerio.Element | undefined): string => {
  if (!node?.children?.[1]) return "";

  const childrenNode = node.children[1] ?? string;
  if ("children" in childrenNode) {
    const textNode = childrenNode.children[0] ?? string;

    if ("data" in textNode) return textNode.data;
  }

  return "";
};

export const getPropertyId = (node: cheerio.Element | undefined): string => {
  if(!node?.attribs.href) return "";

  return node?.attribs.href
}