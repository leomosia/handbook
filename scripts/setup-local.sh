#!/usr/bin/env bash
set -euo pipefail

echo "Leo Mosia Handbook — local development"
echo

if command -v docker &>/dev/null && command -v docker compose &>/dev/null; then
  echo "  Docker detected. Quick start:"
  echo "    docker compose up"
  echo
  echo "  Rebuild image after dependency changes:"
  echo "    docker compose build"
  echo
fi

echo "  Without Docker:"
echo "    1. Install Node.js 20+ and npm"
echo "    2. npm install"
echo "    3. npm run dev"
echo
echo "  The site will be available at http://localhost:1313"
