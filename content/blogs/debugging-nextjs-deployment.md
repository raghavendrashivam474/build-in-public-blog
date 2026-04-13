---
title: "What I Learned Debugging My First Next.js Deployment"
date: "April 2026"
description: "Real lessons from fixing routing, build errors, and deployment issues."
---

## 🚀 The Goal

I built a simple blog using Next.js and deployed it.

It sounded easy — but the real learning came from debugging.

---

## ⚠️ Problems I Faced

### 1. Blog page not opening

Clicking `/blog` was redirecting me to the homepage.

### 2. Deployment mismatch

The app worked locally, but broke on deployment.

### 3. Build errors

Small issues like:
- Using `'` instead of `&apos;`
- Using `<a>` instead of `Link`

---

## 🛠️ How I Fixed It

### ✅ Fixed routing

I realized I was missing:
app/blog/page.js


Without it, `/blog` didn’t exist.

---

### ✅ Fixed deployment issue

I understood:

> If it’s not pushed, it doesn’t exist on Vercel.

---

### ✅ Fixed build issues

- Replaced `<a>` with `Link`
- Escaped special characters
- Cleaned file structure

---

## 🧠 Key Learnings

- Structure matters more than code
- Deployment is different from local
- Debugging is the real skill
- Small mistakes can break production

---

## 🎯 Final Thought

Building projects is not about writing perfect code.

It’s about:
- breaking things
- fixing them
- understanding why they broke

---

More coming soon as I continue building in public 🚀