SYSTEM ROLE:
Act as a Senior Full-Stack AI Engineer and Product Architect. Your task is to build a complete, production-ready web application and AI agent from scratch. Write clean, modular, and well-documented code.

PROJECT OVERVIEW:
We are building a financial tracking and coaching platform for MSMEs (Micro, Small, and Medium Enterprises) in Rwanda. The goal is to digitize informal business operations, track Mobile Money (MoMo) transactions, and provide a 24/7 financial coach to help users build a verifiable credit history.

TECH STACK:

Backend & Agent Logic: Python

Agent Framework: Google Agent Development Kit (ADK)

Fast NLP & Data Parsing: Gemini 3 Flash (used for extracting data from text/SMS inputs)

Real-Time Coaching: Gemini Multimodal Live API (Web interface implementation for real-time voice/text financial coaching)

Frontend (Landing Page & Web App): React with Tailwind CSS

Database: MongoDB (for storing user profiles and transaction logs)

CORE FEATURES TO BUILD:

1. The High-Converting Landing Page

Create a modern, responsive landing page using React and Tailwind.

Include a Hero Section with a clear value proposition: "Turn your hustle's cash flow into bank-ready receipts."

Include a "How It Works" section showing the flow: Input MoMo data -> AI categorizes -> Get financial insights -> Build credit.

Add a Call-to-Action (CTA) button linking to the Web App interface.

2. The Web Interface (Dashboard & Chat)

Build a clean dashboard displaying total income, total expenses, and current balance.

Integrate a chat interface on the web app for users to type or speak to the AI agent.

Include a real-time voice toggle button to activate the Gemini Live streaming connection.

3. The Data Extraction Agent (Gemini 3 Flash + ADK)

Use Google ADK to define an agent responsible for logging transactions.

Create a Python function that takes raw text (e.g., a pasted MoMo SMS or a transcribed voice note like "I just paid 5000 RWF for tomatoes").

Use Gemini 3 Flash to parse this text and return a structured JSON object with: amount, currency, transaction_type (income/expense), category, and date.

Save this parsed JSON into the database.

4. The Financial Coach Agent (Gemini Live API Integration)

Set up a WebSocket connection in Python to handle real-time audio streaming with the Gemini API.

Provide the model with system instructions to act as a supportive, strict, and culturally aware Rwandan financial advisor.

The agent must query the user's transaction database to give personalized advice (e.g., "I notice you spent a lot on transport this week, let's look at ways to cut that down").

DEVELOPMENT ROADMAP (Instructions for the AI):
Please execute this project step-by-step. Do not move to the next step until the current one is fully coded and confirmed.

Step 1: Initialize the Python backend environment and write the Google ADK setup code for the Data Extraction Agent.

Step 2: Write the Gemini 3 Flash prompt and Python parsing logic for handling transaction inputs.

Step 3: Scaffold the React frontend for the web interface and chat UI.

Step 4: Implement the WebSocket logic for the real-time voice coaching feature.