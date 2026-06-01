import 'package:flutter/material.dart';
import 'productos_screen.dart';

class DashboardScreen extends StatelessWidget {
  const DashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Dashboard')),
      drawer: Drawer(
        child: ListView(
          children: [
            const DrawerHeader(
              decoration: BoxDecoration(color: Colors.green),
              child: Text(
                'MENÚ PRINCIPAL',
                style: TextStyle(color: Colors.white),
              ),
            ),
            ListTile(
              leading: const Icon(Icons.inventory),
              title: const Text('Productos'),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (_) => const ProductosScreen()),
                );
              },
            ),
            ListTile(
              leading: const Icon(Icons.shopping_cart),
              title: const Text('Pedidos'),
            ),
            ListTile(
              leading: const Icon(Icons.people),
              title: const Text('Usuarios'),
            ),
            ListTile(
              leading: const Icon(Icons.calendar_month),
              title: const Text('Citas'),
            ),
            ListTile(
              leading: const Icon(Icons.bar_chart),
              title: const Text('Reportes'),
            ),
          ],
        ),
      ),
      body: GridView.count(
        crossAxisCount: 2,
        padding: const EdgeInsets.all(20),
        children: const [
          Card(child: Center(child: Text('Productos'))),
          Card(child: Center(child: Text('Pedidos'))),
          Card(child: Center(child: Text('Inventario'))),
          Card(child: Center(child: Text('Facturación'))),
        ],
      ),
    );
  }
}
