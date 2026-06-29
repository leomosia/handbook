#!/usr/bin/env bash
set -euo pipefail

port="${HUGO_PORT:-1313}"

# Remove stale Hugo build lock from unclean shutdowns
rm -f .hugo_build.lock

# Free the dev port if something is already listening
fuser -k "${port}/tcp" 2>/dev/null || true
sleep 0.5
