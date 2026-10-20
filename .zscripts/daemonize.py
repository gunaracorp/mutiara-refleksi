#!/usr/bin/env python3
"""Daemonize a command via double-fork so it survives tool-session reaping.

Usage: python3 daemonize.py <logfile> <cwd> <cmd> [args...]
The child is reparented to PID 1 (like the boot-time services) and exec's
the command with stdout/stderr appended to <logfile>.
"""
import os
import sys


def daemonize_and_exec(cmd, cwd, logfile):
    if os.fork() > 0:
        os._exit(0)  # parent of first fork leaves
    os.setsid()  # new session, escape process group
    if os.fork() > 0:
        os._exit(0)  # middle parent leaves; child reparented to PID 1
    os.chdir(cwd)
    fd = os.open(logfile, os.O_WRONLY | os.O_CREAT | os.O_APPEND, 0o644)
    os.dup2(fd, 1)
    os.dup2(fd, 2)
    devnull = os.open(os.devnull, os.O_RDONLY)
    os.dup2(devnull, 0)
    os.execvp(cmd[0], cmd)


if __name__ == "__main__":
    logfile, cwd = sys.argv[1], sys.argv[2]
    cmd = sys.argv[3:]
    daemonize_and_exec(cmd, cwd, logfile)
