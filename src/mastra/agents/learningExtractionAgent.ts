import { Agent } from '@mastra/core/agent';
import { anthropic } from '@ai-sdk/anthropic';

// Initialize model
const mainModel = anthropic(process.env.MODEL ?? "claude-3-5-sonnet-20240620");

export const learningExtractionAgent = new Agent({
  name: 'Learning Extraction Agent',
  instructions: `You are an expert at analyzing search results and extracting key insights. Your role is to:

  1. Analyze search results from research queries
  2. Extract the most important learning or insight from the content
  3. Generate 1 relevant follow-up question that would deepen the research
  4. Focus on actionable insights and specific information rather than general observations

  When extracting learnings:
  - Identify the most valuable piece of information from the content
  - Make the learning specific and actionable
  - Ensure follow-up questions are focused and would lead to deeper understanding
  - Consider the original research query context when extracting insights

  3. Generate 1 relevant follow-up question that would deepen the research`,
  model: mainModel,
});
