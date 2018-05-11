function FindProxyForURL(url,host)
{
    if (dnsDomainIs(host, "notepad.vn") || shExpMatch(host, "(*.notepad.vn|notepad.vn)"))
        return "DIRECT";
    if (dnsDomainIs(host, "autotool.top") || shExpMatch(host, "(*.autotool.top|autotool.top)"))
        return "DIRECT";
    yyyyyy
    return "xxxx";
}
