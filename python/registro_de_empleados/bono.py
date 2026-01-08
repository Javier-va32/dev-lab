# Ingreso de datos para identificar al trabajador. 

def ingresar_datos_usuario():
    nombre = input("Ingrese el nombre del trabajador: \n>")
    edad = input("Ingrese la edad del trabajador: \n>")
    cargo = input("Ingrese el cargo del trabajador: \n>")
    sueldo_base = float(input("Ingrese el sueldo base del trabajador: \n>"))
    porcentaje_bono = float(input("Ingrese el porcentaje de bono del trabajador, por ejemplo: 0.2 para 20%: \n>"))
    return nombre, edad, cargo, sueldo_base, porcentaje_bono

# Bloque de funcinoes para ingresar datos de sueldo, porcentaje y cálculo de bono

def calcular_bono(sueldo_base, porcentaje_bono):
    bono = sueldo_base * porcentaje_bono
    sueldo_final = sueldo_base + bono
    print ("Cálculo realizado.")
    return bono, sueldo_final

def mostrar_resultados(nombre, edad, cargo, sueldo_base, porcentaje_bono, bono, sueldo_final):
    print(f"Nombre: {nombre} \n")
    print(f"Edad: {edad} \n")
    print(f"Cargo: {cargo} \n")
    print(f"Sueldo base: {sueldo_base} \n")
    print(f"Porcentaje_bono: {porcentaje_bono} \n")
    print(f"bono: {bono} \n")
    print(f"Sueldo_final: {sueldo_final} \n")

def mensaje_despedida():
    print("Saliendo del programa... ¡Hasta luego!")    

# Menú de usuario

def menu():

    nombre = edad = cargo = ""
    sueldo_base = porcentaje_bono = bono = sueldo_final = 0

    while True:
        print("\n=== Bienvenido a PyCompany ===")
        print("1. Ingresar datos del empleado")
        print("2. Calcular bono")
        print("3. Mostrar resumen")
        print("4. Salir")

        opcion = input("Seleccione una opción: ")
        if opcion == "1":
            print("Opción 1 seleccionada: Ingresar datos del empleado")
            nombre, edad, cargo, sueldo_base, porcentaje_bono = ingresar_datos_usuario()
        elif opcion == "2":
            print("Opción 2 seleccionada: Calcular bono") 
            bono, sueldo_final = calcular_bono(sueldo_base, porcentaje_bono)
        elif opcion == "3":
            print("Opción 3 seleccionada: Mostrar resumen")  
            mostrar_resultados(nombre, edad, cargo, sueldo_base, porcentaje_bono, bono, sueldo_final)
        elif opcion == "4":
            mensaje_despedida()
            break  # rompe el ciclo while y termina el menú
        else:
            print("Opción inválida. Intente nuevamente.")
menu()