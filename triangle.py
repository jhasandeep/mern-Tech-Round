N = 6

for i in range(N):
    
    if i > 0 and  i < N-2 :
        print("* " +  "  "*(N-i-2) + "* ")
    
    else:
        print("* "* (N-i))
