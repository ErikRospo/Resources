def cap(v,vmin,vmax):
    return max(min(v,vmax),vmin)
def range2offset(xs,xe):
    start=xs
    offset=xe-xs
    return start,offset
def offset2range(start,offset):
    xs=start
    xe=start+offset
    return xs,xe
def genRandomText(length,charset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz1234567890!@#$%^&*()_+\{\}\|\:\"<>\?~`-=[]\\;',./"):
    gtext=""
    for _ in range(length):
        gtext+=random.choice(charset)
    return gtext